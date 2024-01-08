/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CarouselUnggulan from "../components/pages/TokoPertanian/carouselUnggulan";
import CarouselPromo from "../components/pages/TokoPertanian/carouselPromo";
import { getTokoTani } from "../api/tokoTani";

export default function InfoPertanian() {
	useEffect(() => {
		getTokoTani().then((res) => {
			console.log(res.data.data);
			setTokoTani(res.data.data);
		});

		// console.log(tokoTani);
	}, []);

	// useEffect(() => {
	// 	console.log(tokoTani);
	// }, [tokoTani]);

	const [tokoTani, setTokoTani] = useState([]);

	return (
		<section>
			<div className="pb-5">
				{/* Header */}
				{/* Dekstop */}
				<div className="w-full hidden md:block">
					<div className="grid md:grid-cols-2 md:px-32 gap-5">
						<div>
							<img src="/image/icon-buah-1.png" alt="buah-1" />
						</div>
						<div className="w-full justify-self-end">
							<div>
								<img
									src="/image/icon-buah-2.png"
									alt="buah-2"
								/>
							</div>
							<div>
								<img
									src="/image/icon-buah-3.png"
									alt="buah-3"
								/>
							</div>
						</div>
					</div>
				</div>
				{/* Mobile */}

				{/* Produk Unggulan Petani */}
				<div className="w-full">
					<p className="text-green-primary text-center text-xl md:text-2xl hover:underline font-bold  py-5">
						PRODUK UNGGULAN PETANI
					</p>
					{/* Dekstop */}
					<div className="hidden md:block">
						<div className="md:px-32 grid md:grid-cols-7">
							{tokoTani.map((item, index) => (
								<a
									key={index}
									className="cursor-pointer hover:bg-green-primary hover:rounded-md p-2"
									href={`https://api.whatsapp.com/send?phone=${item.dataPerson.NoWa}`}
									target="_blank"
									rel="noreferrer"
								>
									<div className="bg-white rounded-md p-3 flex flex-col gap-1 shadow-2xl">
										<img
											src={item.fotoTanaman}
											alt={item.namaProducts}
										/>
										<h4 className="font-bold text-sm text-green-primary">
											{item.namaProducts.toUpperCase()}
										</h4>
										<h4
											className="font-bold text-sm"
											style={{
												color: "orange",
											}}
										>
											Harga : Rp. {item.harga}
										</h4>
										<h4
											className="font-bold text-sm"
											style={{
												color: "grey",
											}}
										>
											Stok : {item.stok}
										</h4>
										<button className="rounded-full w-full text-center text-sm text-white font-bold bg-green-primary">
											Hubungi
										</button>
									</div>
								</a>
							))}
							{/* <div className="cursor-pointer hover:bg-green-primary hover:rounded-md pl-6">
								<a
									href="https://api.whatsapp.com/send?phone=6281252232644"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="/image/icon-unggulan-2.png"
										alt="Icon Unggulan 2"
									/>
								</a>
							</div>
							<div className="cursor-pointer hover:bg-green-primary hover:rounded-md pl-6">
								<a
									href="https://api.whatsapp.com/send?phone=6281252232644"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="/image/icon-unggulan-3.png"
										alt="Icon Unggulan 3"
									/>
								</a>
							</div>
							<div className="cursor-pointer hover:bg-green-primary hover:rounded-md pl-6">
								<a
									href="https://api.whatsapp.com/send?phone=6281252232644"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="/image/icon-unggulan-4.png"
										alt="Icon Unggulan 4"
									/>
								</a>
							</div>
							<div className="cursor-pointer hover:bg-green-primary hover:rounded-md pl-6">
								<a
									href="https://api.whatsapp.com/send?phone=6281252232644"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="/image/icon-unggulan-5.png"
										alt="Icon Unggulan 5"
									/>
								</a>
							</div>
							<div className="cursor-pointer hover:bg-green-primary hover:rounded-md pl-6">
								<a
									href="https://api.whatsapp.com/send?phone=6281252232644"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="/image/icon-unggulan-6.png"
										alt="Icon Unggulan 6"
									/>
								</a>
							</div>
							<div className="cursor-pointer hover:bg-green-primary hover:rounded-md pl-6">
								<a
									href="https://api.whatsapp.com/send?phone=6281252232644"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="/image/icon-unggulan-7.png"
										alt="Icon Unggulan 7"
									/>
								</a>
							</div> */}
						</div>
					</div>
					{/* Mobile */}
					<div className="md:hidden">
						<CarouselUnggulan />
					</div>
				</div>
				{/* Promo Penjual Ngawi */}
				<div className="w-full py-5">
					<div className="grid md:grid-cols-2 md:px-32">
						<div>
							<p className="text-black text-center text-2xl hover:underline font-bold py-5">
								Promo Penjual Ngawi
							</p>
							<div className="flex items-center justify-center">
								<img
									src="/image/icon-promo.png"
									width="60%"
									height="60%"
									alt="Icon Promo"
								/>
							</div>
						</div>
						{/* Dekstop */}
						<div className="w-full hidden md:block">
							<div className="grid grid-cols-3 pt-5 pl-10 md:pl-0 gap-2 md:gap-2 md:pt-24">
								<div>
									<img
										src="/image/icon-merujaya.png"
										width="60%"
										height="60%"
										alt="Icon Merujaya"
										className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
									/>
								</div>
								<div>
									<img
										src="/image/icon-alamjayatani.png"
										width="60%"
										height="60%"
										alt="Icon Alam Jaya Tani"
										className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
									/>
								</div>
								<div>
									<img
										src="/image/icon-sida.png"
										width="60%"
										height="60%"
										alt="Icon Sida"
										className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
									/>
								</div>
								<div>
									<img
										src="/image/icon-sam.png"
										width="60%"
										height="60%"
										alt="Icon Syari'ah Mandiri Agro"
										className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
									/>
								</div>
								<div>
									<img
										src="/image/icon-mulyatani.png"
										width="60%"
										height="60%"
										alt="Icon Mulya Tani"
										className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
									/>
								</div>
								<div>
									<img
										src="/image/icon-jagoantani.png"
										width="60%"
										height="60%"
										alt="Icon Jagoan Tani"
										className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
									/>
								</div>
							</div>
						</div>
						{/* Mobile */}
						<div className="md:hidden">
							<CarouselPromo />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
