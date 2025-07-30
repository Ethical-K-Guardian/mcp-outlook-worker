addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { pathname } = new URL(request.url)

  if (pathname === "/mcp") {
    return new Response(JSON.stringify({
      jsonrpc: "2.0",
      result: {
        name: "Outlook Calendar MCP Server",
        description: "MCP server for accessing Outlook Calendar via Microsoft Graph",
        methods: ["get_events", "create_event", "delete_event"]
      },
      id: 1
    }), {
      headers: { "Content-Type": "application/json" }
    })
  }

  return new Response("MCP Outlook Worker Ready", { status: 200 })
}
