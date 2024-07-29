import { useState } from "react";
import emailjs from "emailjs-com";

export default function FormularioConcurso() {
  const [form, setForm] = useState({
    username: '',
    concurso: '',
    nombrefoto: '',
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData();
    formData.append('username', form.username);
    formData.append('concurso', form.concurso);
    formData.append('nombrefoto', form.nombrefoto);

    selectedFiles.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    emailjs.sendForm('service_ni1y1pa', 'template_wl1zfte', e.target, 'yKnoE3w4Knfg70Ipw')
      .then((result) => {
        console.log(result.text);
        setSendSuccess(true);
      })
      .catch((error) => {
        console.log(error.text);
        setSendSuccess(false);
      })
      .finally(() => {
        setIsSending(false);
        setForm({
          username: '',
          concurso: '',
          nombrefoto: ''
        });
      });
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row">
          <div className="col-12 col-md-7">
            <div>
              <div className="col-12">
                <div className="mb-5">
                  <br />
                  <h2 className="h3">Registro de Participante</h2>
                  <h3 className="fs-6 fw-normal text-secondary m-0">
                    Llene todos los datos requeridos
                  </h3>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                      Nombres <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      placeholder="First Name"
                      value={form.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="concurso" className="form-label">
                      Concurso <span className="text-danger">*</span>
                    </label>
                    <select
                      name="concurso"
                      id="concurso"
                      className="form-control"
                      value={form.concurso}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Hola">Hola</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="nombrefoto" className="form-label">
                      Nombre artístico de la fotografía{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombrefoto"
                      id="nombrefoto"
                      value={form.nombrefoto}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="photos" className="form-label">
                      Seleccionar Fotografía
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="photos"
                      name="photos[]"
                      multiple
                      onChange={handleFileChange}
                    />
                  </div>
                  <div id="preview" className="row g-2">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="col-4 col-md-3 col-lg-2">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`preview-${index}`}
                          className="img-fluid rounded"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button 
                        type="submit" 
                        className="btn bsb-btn-xl btn-primary"
                        disabled={isSending}
                      >
                        {isSending ? 'Sending...' : 'Send'}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {sendSuccess !== null && (
                <div>
                  {sendSuccess ? 'Email sent successfully!' : 'Failed to send email.'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
