export default async (request, context) => {
  return new Response("Hello World!", {
    status: 200,
    headers: {
      "content-type": "text/plain",
    },
  });
};
