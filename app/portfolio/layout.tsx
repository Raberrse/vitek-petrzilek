
export default function RootLayout({
  children,
  videos
}: {
  children: React.ReactNode
  videos: React.ReactNode
}) {
  console.log(children)
  return (
    <div>
        {children}
        {videos}
    </div>
  )
}
