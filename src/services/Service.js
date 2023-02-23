import http from "../API.js";

const getAll = () => {
  return http.get("/");
};

const get = id => {
  return http.get(`/${id}/`);
};

const create = data => {
  return http.post("/", data);
};

const update = (id, data) => {
  return http.patch(`/${id}/`, data);
};

const remove = id => {
  return http.delete(`/${id}/`);
};

const removeAll = () => {
  return http.delete(`/`);
};

const findByTitle = title => {
  return http.get(`/?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;