export default function Footer() {
  return (
    <footer className="bg-slate-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Rentez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
