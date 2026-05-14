import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FactoryComponent from "./pages/FactoryComponent";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import VideoGallery from "./pages/VideoGallery";
import ServiceArea from "./pages/service-area/ServiceArea";
import RoofTypes from "./pages/roof-types/RoofTypes";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<FactoryComponent />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/service-areas/:slug" element={<ServiceArea />} />
          <Route path="/roof-types" element={<RoofTypes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
