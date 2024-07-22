"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUserEffect from "@/effects/useUserEffect";

export function LoginDialog() {
  const {
    open,
    setOpen,
    currentUser,
    logout,
    setUsername,
    setPassword,
    handleLogin,
  } = useUserEffect();
  return (
    <>
      {!currentUser && (
        <div className="flex flex-col items-center justify-around gap-2">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Login to Delete Links
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Login</DialogTitle>
                <DialogDescription>
                  Login to delete previously shortened links. <br />
                  Enter the login details below.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="col-span-3"
                    type="password"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Password" className="text-right">
                    Password
                  </Label>
                  <Input
                    id="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="col-span-3"
                    type="password"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleLogin}>Login</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
      {currentUser && (
        <div className="flex flex-col items-center justify-around gap-2">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Welcome back admin!
          </p>
          <Button type="submit" onClick={logout}>
            Log Out
          </Button>
        </div>
      )}
    </>
  );
}
