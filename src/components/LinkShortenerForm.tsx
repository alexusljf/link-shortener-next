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
import ShortLinkCard from "./ShortLinkCard";

interface props {
  domainName: string;
}

const LinkShortenerForm: React.FC<props> = ({ domainName }) => {
  const { shortUrlState, onSubmit, formSchema } =
    useLinkShortenEffect(domainName);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 border-muted border-2 p-4 w-80 md:w-3/5 xl:w-2/5"
        >
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
      {shortUrlState && <ShortLinkCard shortUrl={shortUrlState} />}
    </>
  );
};

export default LinkShortenerForm;
