import clsx from "clsx";
import { handleFormSubmit } from "./AuthLogic";

async function isSignUp() {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
}

function AuthForm() {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          {isSignUp()
            ? "Welcome to ISMart let's get started"
            : "Log in to your account"}
        </div>
        <div>
          <input type="email" className={clsx("p-3")} />
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
