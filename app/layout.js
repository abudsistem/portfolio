import './page.module.css'

export const metadata = {
  title: 'abudsistem',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
