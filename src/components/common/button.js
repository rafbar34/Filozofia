
export const Button = ({ handleChangeQuestion, title = "", bgColor='white' }) => {
    return (
      <div
        style={{ padding: "10px 20px", background: bgColor, borderRadius: 8, marginTop:10, textAlign:'center' }}
        onClick={handleChangeQuestion}
      >
        {title}
      </div>
    );
  };