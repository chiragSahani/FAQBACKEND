import { expect, use } from "chai";
import { default as chaiHttp, request } from "chai-http";
import { app } from "../app.js"; 

use(chaiHttp);

describe("FAQ API Tests", () => {
  let faqId;

  // Test creating an FAQ
  describe("POST /api/v1/faqs/create", () => {
    it("should create a new FAQ", (done) => {
      request(app)
        .post("/api/v1/faqs/create")
        .send({
          question: "What is Node.js?",
          answer: "Node.js is a runtime environment.",
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.status).to.equal(201);
          expect(res.body.data).to.have.property("_id");
          faqId = res.body.data._id;
          done();
        });
    });
  });

  // Test fetching all FAQs
  describe("GET /api/v1/faqs", () => {
    it("should get all FAQs", (done) => {
      request(app)
        .get("/api/v1/faqs")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body.data).to.be.an("array");
          done();
        });
    });
  });

  // Test fetching a single FAQ
  describe("GET /api/v1/faqs/:id", () => {
    it("should get one FAQ by ID", (done) => {
      request(app)
        .get(`/api/v1/faqs/${faqId}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body.data).to.have.property("question");
          done();
        });
    });
  });

  // Test deleting an FAQ
  describe("DELETE /api/v1/faqs/delete", () => {
    it("should delete an FAQ", (done) => {
      request(app)
        .delete(`/api/v1/faqs/${faqId}/delete`)
        .send({ id: faqId })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
});