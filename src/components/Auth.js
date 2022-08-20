const users = [
    { email: "eeodqql09@gmail.com", password: "1", name: "배승진" },
  ];
  
  export function signIn({ email, password }) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  }