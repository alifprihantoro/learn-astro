interface props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}
export default function ContentNote({ children }: props) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  )
}
