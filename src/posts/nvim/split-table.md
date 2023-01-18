```lua
local str = "This is a string"

-- split the string using space as the delimiter
local tbl = {}
for word in string.gmatch(str, "%S+") do
  table.insert(tbl, word)
end


print(vim.inspect(tbl))

```
