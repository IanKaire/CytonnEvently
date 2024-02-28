import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/' className="flex w-36">
        <Image
            src="/assets/images/cytonn-logo.png"
            width={35}
            height={10}
            alt="Cytonn logo"
          />
          <span className="ml-3 font-bold text-2xl">Cytonn</span>
          <span className="ml-1 font-bold text-2xl">Evently</span>
        </Link>

        <p>2024 Cytonn Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer