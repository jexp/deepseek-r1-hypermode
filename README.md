# DeepSeek R1 On HyperMode

Deploy a GraphQL API to use the hosted DeepSeek R1 on HyperMode.

- [x] Make it work locally
- [x] Deploy to HyperMode
- [ ] Integrate with Neo4j / GraphRAG as a tool
- [ ] Add the interactive deepseek model
- [ ] Add a small UI with [needle starterkit chatbot]([url](https://neo4j.com/labs/neo4j-needle-starterkit/2.0/Components/Chatbot/))

I followed the instructions here: https://docs.hypermode.com/modus/deepseek-model
You can also watch the video: https://www.youtube.com/watch?v=ICRwZ8ywR9Q

## Local deployment

```
modus dev
▗▖  ▗▖ ▗▄▖ ▗▄▄▄ ▗▖ ▗▖ ▗▄▄▖
▐▛▚▞▜▌▐▌ ▐▌▐▌  █▐▌ ▐▌▐▌   
▐▌  ▐▌▐▌ ▐▌▐▌  █▐▌ ▐▌ ▝▀▚▖
▐▌  ▐▌▝▚▄▞▘▐▙▄▄▀▝▚▄▞▘▗▄▄▞▘

Modus CLI v0.13.8
Build succeeded! 🎉

Metadata:
  Plugin Name:     deepseek-r1
  Modus SDK:       modus-sdk-as@0.17.0
  Build ID:        cuc2u8hvclvogv4s6gq0
  Build Timestamp: 2025-01-28T01:13:06.336Z
  Git Commit:      b74cf6d78842d9fc1d9ab881b18b35d4f0740c6a

Functions:
  generateText(prompt: string): string

02:13:09.746 INF Starting Modus Runtime. environment=dev version=b74cf6d
02:13:09.750 INF Using local app directory. path=/Users/mh/d/llm/modus/deepseek/deepseek-r1/build
02:13:09.816 INF Loading manifest file. filename=modus.json
02:13:09.816 INF Env files changed. Updating environment variables.
02:13:09.817 INF Registered GraphQL endpoint. url=http://localhost:8686/graphql
```

![](https://github.com/user-attachments/assets/53e1f951-a692-4c78-9c16-fccf1348bb12)

## Deploy to HyperMode

![](https://github.com/user-attachments/assets/8c86e5e8-4bdf-49c8-a8f3-2efc5d9c8f3c)
