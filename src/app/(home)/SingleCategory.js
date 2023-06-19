import Image from "next/image";
import Link from "next/link";

const SingleCategory = async ({ category=[] }) => {
    return (
        <div>
            <Link href={`products?categoryId=${category?._id}`}>
                <div className="card card-compact bg-base-100 shadow-2xl h-full justify-between">
                    <figure>
                        <Image
                            src={category?.imageUrl}
                            alt={category?.name}
                            width={300}
                            height={300}
                            className="max-h-[150px] sm:max-h-[250px] xl:max-h-[300px] object-cover w-auto"
                        />
                    </figure>
                    <div className="card-body flex-grow-0">
                        <h2 className="card-title">{category?.name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleCategory;