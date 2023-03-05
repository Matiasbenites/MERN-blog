export default function RegisterPage() {
  return (
    <div>
      <form className="register">
        <h1>Register</h1>
        <input type="text" placeholder="username"></input>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <button>Register</button>
      </form>
    </div>
  );
}
