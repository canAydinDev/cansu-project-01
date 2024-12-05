import React from "react";
import Container from "../global/Container";

function Services() {
  return (
    <Container>
      <div className="flex justify-between items-center mt-6">
        <div className="flex flex-1  m-4 p-2">
          <video className="w-[500px] h-[250px]  " autoPlay loop muted>
            <source src="/video/video.mp4" type="video/mp4" />
            Tarayıcınız bu videoyu oynatmayı desteklemiyor.
          </video>
        </div>
        <div className="flex flex-1 flex-col gap-6 mt-16">
          <div className="text-accent">SERVICES</div>
          <div>
            <h2 className="h2 tracking-tight leading-tight mb-6">
              Thought out to the smallest detail
            </h2>
            <div>
              <ol className="list-decimal pl-5 mb-5 uppercase tracking-tight font-light">
                <li className="mb-2">
                  <a href="/logo-design">Logo Design</a>
                </li>
                <li className="mb-2">
                  <a href="/business-card-design">Business Card Design</a>
                </li>
                <li className="mb-2">
                  <a href="/stationery-design">Stationery Design</a>
                </li>
                <li className="mb-2">
                  <a href="/stationery-design">Letterhead Design</a>
                </li>
                <li className="mb-2">
                  <a href="/Brouchers">Brouchers</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Services;
