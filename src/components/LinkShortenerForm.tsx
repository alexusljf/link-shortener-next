"use client";
import ErrorText from "./ErrorText";
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

const LinkShortenerForm = () => {
  const { longUrl, setLongUrl, shortUrl, errorState, onSubmit, formSchema } =
    useLinkShortenEffect();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });
  return (
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
          <Button type="submit">Submit</Button>
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
      {errorState && <ErrorText />}
    </div>
  );
};

// return (
//   <div>
//     <h1 className="text-sky-400">Link Shortener</h1>
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={longUrl}
//         onChange={(e) => setLongUrl(e.target.value)}
//         placeholder="Enter long URL"
//         required
//       />
//       <Button type="submit">Shorten</Button>
//     </form>
//     {shortUrl && (
//       <div>
//         <p>
//           Shortened URL:{" "}
//           <a href={shortUrl} target="_blank" rel="noopener noreferrer">
//             {shortUrl}
//           </a>
//         </p>
//       </div>
//     )}
//     {errorState && <ErrorText />}
//   </div>
// );
// };

export default LinkShortenerForm;
