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
    creationErrorMessage,
    loginErrorMessage,
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
                {loginErrorMessage && (
                  <div className="text-red-700">{loginErrorMessage}</div>
                )}
              </DialogHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin(); // Call your login handler
                }}
                className="grid gap-4 py-4"
              >
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="Username"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="col-span-3"
                    type="text"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Password" className="text-right">
                    Password
                  </Label>
                  <Input
                    id="Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="col-span-3"
                    type="password"
                    required
                  />
                </div>
                <DialogDescription>
                  Don&lsquo;t have an account yet?{" "}
                  <button type="button" onClick={openUserCreation}>
                    Create an account
                  </button>
                </DialogDescription>
                <DialogFooter>
                  <Button type="submit">Login</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={creationOpen} onOpenChange={setCreationOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create User</DialogTitle>
                <DialogDescription>
                  Enter your preferred login details below.
                </DialogDescription>{" "}
                {creationErrorMessage && (
                  <div className="text-red-700">{creationErrorMessage}</div>
                )}
              </DialogHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreate(); // Call your create user handler
                }}
              >
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="Name"
                      onChange={(e) => setName(e.target.value)}
                      className="col-span-3"
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="Username"
                      onChange={(e) => setUsername(e.target.value)}
                      className="col-span-3"
                      type="text"
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
                  <Button type="submit">Create</Button>
                </DialogFooter>
              </form>
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
