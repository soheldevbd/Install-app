import AppInstall from "@/components/Apps/AppInstall";
import { getAllApps } from "@/lib/app";
import Image from "next/image";
import Link from "next/link";



type Rating = {
    name: string;
    count: number;
};

type App = {
    image: string;
    title: string;
    companyName: string;
    id: number;
    description: string;
    size: number;
    reviews: string;
    ratingAvg: number;
    downloads: string;
    ratings: Rating[];
};

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductDetailsPage({
    params,
}: PageProps) {
    const { id } = await params;

    const apps: App[] = await getAllApps()

    const app = apps.find(
        (item) => item.id === Number(id)
    );

    if (!app) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white">
                <div className="text-center">



                </div>
            </main>
        );
    }

    const maxRating = Math.max(
        ...app.ratings.map((rating) => rating.count)
    );

    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-7xl px-5 py-8">

                {/* Back */}
                <Link
                    href="/"
                    className="text-sm font-medium text-slate-500 hover:text-black"
                >
                    ← Back to Apps
                </Link>

                {/* ================= APP INFO ================= */}

                <section className="mt-5 border-b border-slate-200 pb-6">
                    <div className="flex flex-col gap-6 md:flex-row">

                        {/* Image */}

                        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-slate-50">
                            <Image
                                src={app.image}
                                alt={app.title}
                                fill
                                priority
                                unoptimized
                                className="object-contain p-2"
                            />
                        </div>

                        {/* Details */}

                        <div className="flex-1">

                            <h1 className="text-2xl font-bold text-slate-900">
                                {app.title}
                            </h1>

                            <p className="mt-1 text-sm text-slate-500">
                                Developed by{" "}
                                <span className="font-medium text-violet-600">
                                    {app.companyName}
                                </span>
                            </p>

                            <div className="my-4 h-px bg-slate-200" />

                            {/* Stats */}

                            <div className="flex flex-wrap gap-10">

                                {/* Downloads */}

                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl text-emerald-500">
                                            ↓
                                        </span>

                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Downloads
                                            </p>

                                            <p className="text-2xl font-bold text-slate-900">
                                                {app.downloads}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Rating */}

                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl text-orange-500">
                                            ★
                                        </span>

                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Average Ratings
                                            </p>

                                            <p className="text-2xl font-bold text-slate-900">
                                                {app.ratingAvg}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Reviews */}

                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl text-violet-500">
                                            ▣
                                        </span>

                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Total Reviews
                                            </p>

                                            <p className="text-2xl font-bold text-slate-900">
                                                {app.reviews}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Install */}

                            <AppInstall app={app}></AppInstall>
                        </div>
                    </div>
                </section>

                {/* ================= RATINGS ================= */}

                <section className="border-b border-slate-200 py-7">

                    <h2 className="mb-5 text-base font-semibold text-slate-900">
                        Ratings
                    </h2>

                    <div className="space-y-3">

                        {app.ratings
                            .slice()
                            .reverse()
                            .map((rating) => {
                                const width =
                                    (rating.count / maxRating) * 100;

                                return (
                                    <div
                                        key={rating.name}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="w-12 shrink-0 text-xs text-slate-500">
                                            {rating.name.replace(" star", "")} star
                                        </span>

                                        <div className="h-4 flex-1 overflow-hidden bg-slate-100">
                                            <div
                                                className="h-full bg-orange-500"
                                                style={{
                                                    width: `${width}%`,
                                                }}
                                            />
                                        </div>

                                        <span className="w-20 text-right text-xs text-slate-400">
                                            {rating.count.toLocaleString()}
                                        </span>
                                    </div>
                                );
                            })}

                    </div>

                    {/* Scale */}

                    <div className="ml-15 mt-2 flex justify-between text-[10px] text-slate-400">
                        <span>0</span>

                        <span>
                            {Math.round(maxRating * 0.25).toLocaleString()}
                        </span>

                        <span>
                            {Math.round(maxRating * 0.5).toLocaleString()}
                        </span>

                        <span>
                            {Math.round(maxRating * 0.75).toLocaleString()}
                        </span>

                        <span>
                            {maxRating.toLocaleString()}
                        </span>
                    </div>

                </section>

                {/* ================= DESCRIPTION ================= */}

                <section className="py-7">

                    <h2 className="mb-5 text-base font-semibold text-slate-900">
                        Description
                    </h2>

                    <div className="max-w-6xl space-y-6 text-sm leading-7 text-slate-500">

                        <p>
                            {app.description}
                        </p>

                        <p>
                            {app.title} provides users with a smooth and
                            reliable experience. The application is designed
                            to make everyday tasks easier while providing
                            useful features for its users.
                        </p>

                        <p>
                            With regular updates and improvements, users can
                            continue to enjoy a better and more convenient
                            experience.
                        </p>

                    </div>

                </section>

            </div>
        </main>
    );
}