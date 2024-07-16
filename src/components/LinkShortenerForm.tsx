"use client";
import useLinkShortenEffect from "@/effects/useLinkShortenEffect";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import RequirementsDrawer from "./RequirementsDrawer";

const LinkShortenerForm = () => {
  const { shortUrl, onSubmit, formSchema } = useLinkShortenEffect();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });
  return (
    <>
      <div className="border-solid border-black border-2 p-4 w-2/3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link Shortener</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your URL here" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the URL to be shortened.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button type="submit">Submit</Button>
              <RequirementsDrawer />
            </div>
          </form>
        </Form>
        {shortUrl && (
          <div className="mt-8">
            <p>
              Shortened URL:{" "}
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default LinkShortenerForm;
