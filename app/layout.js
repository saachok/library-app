import Nav from '@/components/Nav';

export const metadata = {
  title: 'Library App',
  description:
    'Web application for people around the world who likes to read books and share their thoughts and experience with each others.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: '0' }}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
