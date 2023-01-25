## three sitter
```lua
lua print(vim.treesitter.get_node_at_cursor())
```
## syntax match
```vim
echo map(synstack(line('.'), col('.')), 'synIDattr(v:val, "name")')
```
