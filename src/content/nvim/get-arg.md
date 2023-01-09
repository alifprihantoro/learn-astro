```lua
require('git').setup()
local cmd = vim.api.nvim_create_user_command
function TesPrint(args)
  local MSG = args["args"]
  -- vim.cmd [[
  --   !eval "$(ssh-agent -s)" && ssh-add ~/.ssh/github
  --   Git add .
  -- ]]
  vim.cmd("echo "..MSG)
  -- vim.cmd('!git pushall')
end
cmd("Gsp", TesPrint , { nargs = '?' })
```
