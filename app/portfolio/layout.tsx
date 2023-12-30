
export default function RootLayout({
  children,
  videos
}: {
  children: React.ReactNode
  videos: React.ReactNode
}) {
  
  return (
    <div>
        {children}
        {videos}
    </div>
  )
}
