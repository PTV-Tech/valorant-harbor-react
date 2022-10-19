import React, { useState } from 'react';
import {Container, Row, Col, Modal} from 'react-bootstrap';
import ImageHeader from '../../images/header-desktop.png';
import Image1 from '../../images/img-1.png';
import Image2 from '../../images/img-2.png'
import Image3 from '../../images/img-3.png';
import Image4 from '../../images/img-4.png'

const News = () => {


    const [show, setShow] = useState(false);
    const [selectedEmbed, setSelectedEmbed] = useState('')
  
    function toggleActive(embed)
    {
      setShow(true)
      setSelectedEmbed(embed)
    }
  
    const slidesData = [
      {
        id: 1,
        class: "item-1",
        name: "ĐẶC VỤ MỚI: HARBOR",
        subText: "THỦY TRIỀU BẤT TẬN",
        src: Image1,
        content:"Harbor đã tới. Xuất thân từ bờ biển Ấn Độ, Đặc Vụ Kiểm Soát mới toanh này điều khiển thủy triều và những dòng nước siết để bảo vệ đồng đội và quét sạch kẻ thù.",
        embed: "https://www.youtube.com/embed/fdb50DUjrZY"
      },
      {
        id: 2,
        class: "item-2",
        name: "ION TRỞ LẠI",
        subText: "MỞ RỘNG KHO VŨ KHÍ CỦA BẠN",
        content: "Thời đại của Ion đã bắt đầu trở lại. Nâng tầm hình ảnh và âm thanh trong BST của bạn với Vandal, Ares, Spectre, Frenzy và Karambit được thiết kế theo phong cách Ion đặc trưng.",
        src: Image2,
        embed: "https://www.youtube.com/embed/Bq__I904u4o"
      },
      {
        id: 3,
        class: "item-3",
        name: "BATTLEPASS PHẦN III",
        subText: "VẬT PHẨM BỔ SUNG ĐỘC NHẤT MỚI",
        content: "Trang hoàng BST trong lúc trải nghiệm các vật phẩm Battlepass mới. Sở hữu Phụ Kiện Súng Ánh Sáng Corbin, những bộ skin đã thất truyền và rất nhiều vật phẩm trang trí độc nhất khác.",
        src: Image3,
        embed: "https://www.youtube.com/embed/N1umJo6nTsk"
      },
      {
        id: 4,
        class: "item-4",
        name: "XẾP HẠNG PHẦN MỚI",
        subText: "SÀN ĐẤU ĐÃ MỞ",
        content: "Xếp hạng đã được tái thiết lập. Bạn đã sẵn sàng chưa nào? Hãy chứng minh bản thân bằng những thử thách mới trước khi Phần và Hồi này kết thúc.",
        src: Image4,
        embed: ""
      },
    ];

    return (
        <>
        <section className="block-news bg-news">
            <div className="header-top text-center">
                <img src={ImageHeader} alt="" />
            </div>
            <Container>
                <Row className="list-news g-0">
                    {slidesData.map((slide, idx) => (
                        <Col lg={3} xs={6} key={slide.id}>
                            <div className={`item ${slide.class}`}>
                                <h5>{slide.name}</h5>
                                <h6>{slide.subText}</h6>
                                <a onClick={() => toggleActive(slide.embed)}>
                                    <img src={slide.src} alt="" className="img-fluid" />
                                </a>  
                                <div className="description">
                                    <p>{slide.content}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className="text-center">
                    <a href="" className="btn-news">TRẢI NGHIỆM NGAY</a>
                </div>
            </Container>
        </section>
        <Modal show={show}
        onHide={() => setShow(false)} centered>
            <Modal.Body>
            <iframe src={selectedEmbed} width="100%" height="500px" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal.Body>
        </Modal>
        </>
    );
};

export default News;
