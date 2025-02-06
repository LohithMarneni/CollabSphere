import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CalendarIcon, PlusCircleIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';
import { format } from 'date-fns';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  description: z.string().min(1, 'Description is required.'),
  date: z.date({ required_error: 'Date is required.' }),
  start: z.string().min(1, 'Start time is required.'),
  end: z.string().min(1, 'End time is required.'),
  money: z.number().min(1, 'Money is required.'),
});

export function TasksMutateDrawer({ open, onOpenChange, currentRow, reloadTasks }) {
  const isUpdate = !!currentRow;
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: currentRow ?? {
      title: '',
      description: '',
      date: null,
      start: '',
      end: '',
      money: 1,
    },
  });

  const [date, setDate] = useState(null);

  const onSubmit = async (data) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        alert('Access token not found. Please log in again.');
        return;
      }

      const response = await fetch('http://localhost:3500/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          date: format(data.date, 'MM-dd-yyyy'),
          start: data.start,
          end: data.end,
          money: data.money,
          createdBy: '67a3b3a71977b6a93be5c095', // Hardcoded for now, replace dynamically if needed
          currentStat: 'pending',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add task');
      }

      const result = await response.json();
      console.log('Task created:', result);
      // reloadTasks(); // Reload the main task list
      // onOpenChange(false); // Close the drawer
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the task.');
    }
  };

  return (
    <Sheet open={open}>
      <SheetTrigger asChild>
        <Button>
          <span>Create</span> <PlusCircleIcon size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <SheetHeader className='text-left'>
          <SheetTitle>{isUpdate ? 'Update' : 'Create'} Task</SheetTitle>
          <SheetDescription>
            {isUpdate
              ? 'Update the task by providing necessary info.'
              : 'Add a new task by providing necessary info.'}
            Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form id='tasks-form' onSubmit={form.handleSubmit(onSubmit)} className='flex-1 space-y-5'>
            <FormField control={form.control} name='title' render={({ field }) => (
              <FormItem className='space-y-1'>
                <FormLabel>Title</FormLabel>
                <FormControl><Input {...field} placeholder='Enter a title' /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name='description' render={({ field }) => (
              <FormItem className='space-y-1'>
                <FormLabel>Description</FormLabel>
                <FormControl><Input {...field} placeholder='Enter a description' /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name='date' render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant='outline' className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                        {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar mode='single' selected={field.value} onSelect={field.onChange} initialFocus />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name='start' render={({ field }) => (
              <FormItem className='space-y-1'>
                <FormLabel>Start Time</FormLabel>
                <FormControl><Input {...field} type='time' /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name='end' render={({ field }) => (
              <FormItem className='space-y-1'>
                <FormLabel>End Time</FormLabel>
                <FormControl><Input {...field} type='time' /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <SheetFooter className='gap-2'>
              <SheetClose asChild><Button variant='outline'>Close</Button></SheetClose>
              <Button form='tasks-form' type='submit'>Save changes</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}