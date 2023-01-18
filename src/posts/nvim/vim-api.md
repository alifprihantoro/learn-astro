## set variable from exec and read text by number
```lua
Tes=vim.api.nvim_exec([[!sed -n 2,7p %]],true)
Tes=vim.api.nvim_exec([[!sed -n 2p %]],true)
```
## write on line
```lua
vim.api.nvim_set_current_line(Tes)
```
