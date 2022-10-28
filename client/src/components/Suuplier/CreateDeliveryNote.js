import React from 'react'

function CreateDeliveryNote() {
    return (
        <div class="container shadow my-5 py-5 mx-auto w-50">
            <h3 className=" fw-bolder"><center><b>Delivery Note</b></center></h3>
            <hr />
            <div className='row py-3'>
                <div class="col-md-4">
                    <label for="" class="form-label">Purchase ID</label>
                    <input type="text"
                        class="form-control"
                        id="exampleFormControlTextarea3" />
                </div>
                <div class="col-md-4">
                    <label for="" class="form-label">Order ID</label>
                    <input type="email"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                    />

                </div>
                <div class="col-md-4">
                    <label for="" class="form-label">Delivery ID</label>
                    <input type="text"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                    />
                </div>
            </div>
            <div className='row py-3'>
                <div class="col-md-6">
                    <label for="" class="form-label">Date</label>
                    <input type="text"
                        class="form-control"
                        id="exampleFormControlTextarea3" />
                </div>
                <div class="col-md-6">
                    <label for="" class="form-label">Total AMount</label>
                    <input type="email"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                    />
                </div>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto"> <br/>
                <button class="btn btn-danger" type="button">Submit Delivery Note</button>
            </div>
        </div>
    )
}

export default CreateDeliveryNote