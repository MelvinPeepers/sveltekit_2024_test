export default async (request, context) => {
  return new Response("Hello World from the Edge!", {
    status: 200,
    headers: {
      "content-type": "text/plain",
    },
  });
};
