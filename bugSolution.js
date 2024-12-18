```javascript
// pages/index.js

export default function Home() {
  //Added Error Boundaries
  try {
    return (
      <div>
        <h1>Welcome to my Next.js app</h1>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>An error occurred</h1>
        <pre>{error.message}</pre>
      </div>
    );
  }
}
```