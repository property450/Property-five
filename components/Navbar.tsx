import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-black">Property-Five</h1>
      <div className="flex gap-4 text-blue-600 font-medium">
        <Link href="/">首页</Link>
        <Link href="/upload">上传房源</Link>
        <Link href="/favorites">我的收藏</Link>
        <Link href="/my-profile">我的主页</Link>
      </div>
    </nav>
  );
}
