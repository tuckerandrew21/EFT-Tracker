# Token Efficiency

Use [ccusage](https://github.com/ryoppippi/ccusage) to track token consumption: `npm i -g ccusage`

## The Real Token Killers

MCP tool definitions are a one-time cost (~5,000 tokens). The real consumers are:

1. **Large file reads** (2,000-50,000+ tokens each)
   - Use `offset`/`limit` parameters for large files
   - Use Grep to find specific lines before reading
   - Never read entire files when only a section is needed

2. **Repeated context** (10,000-50,000+ tokens)
   - Reference previously read content: "Using the file we read earlier..."
   - Use `/compact` every 15-20 exchanges
   - Start new sessions for unrelated tasks

3. **Verbose command output** (1,000-10,000+ tokens)
   - Filter output: `command 2>&1 | head -50`
   - Use `--quiet` or `--silent` flags
   - Run specific tests, not full suites

4. **Conversation length** (accumulates over time)
   - Use `/compact` regularly
   - Start fresh sessions for new tasks
   - Be concise in tool usage

## Quick Commands

```bash
/compact    # Summarize conversation history
/context    # Check current context size
/usage      # View token usage
```

## Cost-Aware Workflows

**Bug fixes:**
1. Grep for error first
2. Read only affected sections
3. Make targeted edits
4. Run specific test

**New features:**
1. Plan in one message (use thinking)
2. Implement in batches
3. Compact between milestones

## Prompt Tips

❌ "Read the entire file"
✅ "Find the `functionName` function and read just that section"

❌ "Run all tests"
✅ "Run `npm test -- path/to/specific.test.ts`"

❌ Multiple back-and-forth to clarify
✅ Single detailed prompt with all requirements upfront
