console.log("hello");
console.log("TESTINGGG");

const myHeaders = new Headers();
myHeaders.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndicWJveW9leGVzemhudnRpcXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwNDE4NjYsImV4cCI6MjA4MjYxNzg2Nn0.p295CNECgHAw54TyYZMHeQSTs8IrjdajPBB0WMMnv-Q");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://wbqboyoexeszhnvtiqqx.supabase.co/rest/v1/Profile", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

