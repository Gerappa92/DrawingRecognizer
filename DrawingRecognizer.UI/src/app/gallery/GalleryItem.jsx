const GalleryItem = ({ imageUrl, title }: { imageUrl: string; title: string }) => (
    <div className="gallery-item">
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
  
  export default GalleryItem;
  