## add table/array

> hello hai
```lua
local tes = { "hello", "hai", "ok"}
```
## get lenght table/array
```lua
print(#tes)
```
## insert table/array
```lua
table.insert(tes,"tabmbah")
```
## loop table/array
```lua
for i, value in ipairs(tes) do
  print(value)
  print(i)
end
```
## loop table/array by lenght
```lua
for i = 1, #tes do
  print(tes[i].name)
end
```
