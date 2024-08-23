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
    loginOpen,
    setLoginOpen,
    creationOpen,
    setCreationOpen,
    openUserCreation,
    openLogin,
    currentUser,
    logout,
    setName,
    setUsername,
    setPassword,
    handleLogin,
    handleCreate,
    errorMessage,
  } = useUserEffect();
  return (
    <>
      {!currentUser && (
        <div className="flex flex-col items-center justify-around gap-2">
          <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
            <DialogTrigger asChild>
              <Button>Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Login</DialogTitle>
                <DialogDescription>
                  Login to view your previously shortened links. <br />
                  Enter your login details below.
                </DialogDescription>{" "}
                {errorMessage && (
                  <div className="text-red-700">{errorMessage}</div>
                )}
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
                <DialogDescription>
                  Don&lsquo;t have an account yet?{" "}
                  <button onClick={openUserCreation}>Create an account</button>
                </DialogDescription>
              </div>
              <DialogFooter>
                <Button onClick={handleLogin}>Login</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={creationOpen} onOpenChange={setCreationOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create User</DialogTitle>
                <DialogDescription>
                  Enter your preferred login details below.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="Name"
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-3"
                    type="password"
                  />
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
                <DialogDescription>
                  Already have an account?{" "}
                  <button onClick={openLogin}>Log In</button>
                </DialogDescription>
              </div>
              <DialogFooter>
                <Button onClick={handleCreate}>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
      {currentUser && (
        <Button type="submit" onClick={logout}>
          Log Out
        </Button>
      )}
    </>
  );
}
