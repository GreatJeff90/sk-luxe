export default function AuthErrorPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-brand-cream">
      <div className="text-brand-green">
        <h1 className="text-2xl">Authentication Error</h1>
        <p>Something went wrong during the sign-in process.</p>
        <a href="/login" className="underline">Back to Login</a>
      </div>
    </div>
  );
}