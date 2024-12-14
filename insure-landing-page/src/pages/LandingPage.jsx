 

const LandingPage = () => {
  return (
     <main>
				<section className="w-full sm:hidden">
					{/* mobile view */}
					<section className="flex w-full">
						<img className="w-full object-cover object-center bg-no-repeat" src="src/assets/images/image-intro-mobile.jpg" alt="" />
					</section>
					<section className="w-full bg-dark-violet h-screen mb-10">
							<img className="left-0" src="src/assets/images/bg-pattern-intro-left-mobile.svg" alt="" />
							<div className="relative -top-20">
								<h1 className="
								text-white text-5xl font-bold text-center"
								>Humanizing <br /> your insurance.</h1>
								<p className="
								text-white text-md font-semibold text-center my-4
								">Get your life insurance coverage easier and <br />faster. We blend our expertise and <br />technology to help you find the plan that's <br />right for you. Ensure you and your loved <br />ones are protected. </p>
								<p className="text-center"><button className="border-2 mt-10 border-white px-8 py-2 mx-auto text-white font-semibold">VIEW PLANS</button></p>
								<img className="
								absolute right-0 top-3/4
								" src="src/assets/images/bg-pattern-intro-right-mobile.svg" alt="" />
							</div>
							<section className="w-full bg-white h-screen pt-12 ">
								<div className="border-2 w-1/2 mx-auto border-dark-grayish-violet mt-24">
								</div>
								<div className="text-center mt-10"><h1 className="text-5xl font-extrabold">We're Different</h1></div>
								<div className="flex flex-col items-center py-20">
									<div className="flex justify-center items-center flex-col">
										<img src="src/assets/images/icon-snappy-process.svg" alt="" />
										<h1 className="text-3xl font-bold my-8">Snappy process</h1>
										<p className="text-center font-semibold text-dark-grayish-violet text-lg">Our application process can be completed <br />in minutes, not hours. Don't get stuck filling <br />in tedious forms.</p>
									</div>
									<div className="flex justify-center items-center flex-col mt-10">
										<img src="src/assets/images/icon-affordable-prices.svg" alt="" />
										<h1 className="text-3xl font-bold my-8">Affordable pricing</h1>
										<p className="text-center font-semibold text-dark-grayish-violet text-lg">We don't want you worrying about high <br />monthly costs. Our prices maybe low, but <br />we still offer the best coverage possible.</p>
									</div>
									<div className="flex justify-center items-center flex-col mt-10">
										<img src="src/assets/images/icon-people-first.svg" alt="" />
										<h1 className="text-3xl font-bold my-8">People first</h1>
										<p className="text-center font-semibold text-dark-grayish-violet text-lg">OUr plans aren't full of conditions and <br />clauses to prevent payout. We make sure <br />you are covered when you need it.</p>
									</div>
								</div>
							
							</section>
							
					</section>
				</section>
     </main>
  )
}

export default LandingPage