import React from "react";

export default function ChartHeader() {
  return (
    <div
      className="filers"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "80%",
        margin: "auto",
        marginLeft: "200px"
      }}
    >
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          style={{ width: "150px" }}
        >
          <option selected>End Year</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Filter By</label>
      </div>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          style={{ width: "150px" }}
        >
          <option selected>Topics</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Filter By</label>
      </div>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          style={{ width: "150px" }}
        >
          <option selected>Sector</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Filter By</label>
      </div>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          style={{ width: "150px" }}
        >
          <option selected>Region</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Filter By</label>
      </div>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          style={{ width: "150px" }}
        >
          <option selected>Source</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Filter By</label>
      </div>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          style={{ width: "150px" }}
        >
          <option selected>PEST</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Filter By</label>
      </div>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          style={{ width: "150px" }}
        >
          <option selected>SWOT</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Filter By</label>
      </div>
    </div>
  );
}
