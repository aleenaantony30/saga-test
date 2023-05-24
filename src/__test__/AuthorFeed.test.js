// import { render, screen } from '@testing-library/react';
// import { Feed } from '../pages/ArticleFeed';

// // Mock the fetchAPIData function
// const mockData = [
//       {
//         id: 1,
//         date: '2023-05-23T10:00:00',
//         title: 'Test Article 1',
//         link: 'https://example.com/article1',
//         author: 1,
//         excerpt: 'Test excerpt 1',
//       },
//       {
//         id: 2,
//         date: '2023-05-22T10:00:00',
//         title: 'Test Article 2',
//         link: 'https://example.com/article2',
//         author: 2,
//         excerpt: 'Test excerpt 2',
//       },
//     ];

// describe('ArticleFeed', () => {
//   test('renders loading message initially', async () => {
//     render(<Feed article={mockData[0]} />);
//     expect(screen.getByText('Loading...')).toBeInTheDocument();
//   });

// //   test('renders article feed after loading', async () => {
// //     render(<ArticleFeed />);
// //     await screen.findByText('Test Article 1');
// //     expect(screen.getByText('Test Article 1')).toBeInTheDocument();
// //     expect(screen.getByText('Test Article 2')).toBeInTheDocument();
// //   });

//   // Add more test cases for pagination, button click, etc.
// });

// // describe('Feed', () => {
// //   test('renders article title and excerpt', () => {
// //     const article = {
// //       id: 1,
// //       date: '2023-05-23T10:00:00',
// //       title: 'Test Article',
// //       link: 'https://example.com/article',
// //       author: 1,
// //       excerpt: '<p>Test excerpt</p>',
// //     };
// //     render(<Feed article={article} />);
// //     expect(screen.getByText('Test Article')).toBeInTheDocument();
// //     expect(screen.getByText('Test excerpt')).toBeInTheDocument();
// //   });

// //   // Add more test cases for other components if needed
// // });

// // describe('AuthorName', () => {
// //   // Mock the fetchAPIData function for getting author data
// //   jest.mock('../api', () => ({
// //     fetchAPIData: jest.fn(() =>
// //       Promise.resolve({ id: 1, name: 'Test Author' })
// //     ),
// //   }));

// //   test('renders author name', async () => {
// //     const authorId = 1;
// //     render(<AuthorName authorId={authorId} />);
// //     await screen.findByText('Test Author');
// //     expect(screen.getByText('Test Author')).toBeInTheDocument();
// //   });

// //   // Add more test cases for other components if needed
// // });
