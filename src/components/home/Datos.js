export function Datos({texto}) {
    return (
        <section class="relative ">
            <span class='absolute top-0 left-0 w-full h-20  gap-5' ></span>
            <div class="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5   pt-20">
                <div class={`mx-auto   text-white p-5 sm:p-6 py-6 sm:py-8 max-w-5xl backdrop-blur-md bg-${texto}/30 rounded-3xl bg-box-bg border border-box-border shadow-lg  shadow-box-shadow md:divide-x divide-box-border   grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6 lg:gap-12`}>
                    <div class="text-center">
                        <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                            12+
                        </h2>
                        <p class="mt-2 text-heading-3">Created projects</p>
                    </div>

                    <div class="text-center">
                        <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                            200+
                        </h2>
                        <p class="mt-2 text-heading-3">Projects</p>
                    </div>

                    <div class="text-center">
                        <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                            120
                        </h2>
                        <p class="mt-2 text-heading-3">Happy Client</p>
                    </div>

                    <div class="text-center">
                        <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                            5+
                        </h2>
                        <p class="mt-2 text-heading-3">Years</p>
                    </div>
                </div>
            </div>
        </section>


    )

}