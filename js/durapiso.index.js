const uriservice = "https://durapisoservice.herokuapp.com/";

let listProduct = [];
let products = [];

let clients = [];
let listClient = [];

let listDownloads = [];
let downloads = [];

let listJobs = [];
let jobs = [];

const sessionmaker = "LANDINGPAGE";
// star LANDING PAGE
OnStart();

// start region menus 

// region jobs
function JobsReadCallBack(jobsparams) {
    // console.dir(jobsparams);
    let renderJobs = '';
    jobsparams.map(item => {
        renderJobs += `
        <div class="fh5co-feature">
        <div class="fh5co-text">
			<h3>${item.name}</h3>
			<p>${item.description}</p>
        </div>
        </div>
     `
    });
    // $("#divIndexProducts").html(renderProducts);
    var myElement = document.getElementById("divJobs");
    myElement.innerHTML = renderJobs;
}
function JobsRead() {
    listJobs = [];
    jobs = [];

    // missed create filter in backend
    let endpoint = uriservice + "api/jobs";

    $.ajax({
        type: "GET",
        dataType: "json",
        url: endpoint,
        async: true,
        beforeSend: function (xhr) { },
        success: function (data, textStatus, jqXHR) {

            if (typeof data !== "undefined") {
                let adata = JSON.parse(data.result);
                //                debugger;
                adata.map(datatmp => {
                    let tmpjob = {
                        id: datatmp._id,
                        status_item: datatmp.status_item,
                        create_date: datatmp.create_date,
                        modification_date: datatmp.modification_date,
                        maker: datatmp.maker,
                        name: datatmp.name,
                        description: datatmp.description,
                    };
                    jobs.push(tmpjob);
                });
            }
        },
        complete: function (jqXHR, textStatus) {
            JobsReadCallBack(jobs);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.statusText);
        }
    });
}
// endregion jobs 

function ClientsCurrent() {

    for (let index = 0; index < clients.length; index++) {
        document.getElementById("client_description_" + index).innerHTML = clients[index].description;
        document.getElementById("client_name_" + index).innerHTML = clients[index].name;
        $("#client_imgurl_" + index).attr("src", clients[index].imgurl);
    }

}
// region downloads
function DownloadReadCallBack(downloads) {
    // console.dir(downloads);
    let renderDownloads = '';
    downloads.map(item => {

        renderDownloads += `       
        <div class="fh5co-feature">
        <div class="fh5co-icon animate-box fadeInUp animated"><a style="cursor:pointer;" target="_blank" href="${item.pathurl}"><i class="icon-download"></i></a></div>
        <div class="fh5co-text animate-box fadeInUp animated">
           <h3> ${item.title}</h3>
           <p> ${item.description}</p>
        </div>
        </div>
     `});

    var myElement = document.getElementById("divDownloads");
    myElement.innerHTML = renderDownloads;
}

function DownloadsRead() {

    listDownloads = [];
    downloads = [];

    let endpoint = uriservice + "api/downloads/4/filter";
    //  let tmpData = JSON.stringify(tmpuser);

    $.ajax({
        type: "GET",
        dataType: "json",
        url: endpoint,
        async: true,
        beforeSend: function (xhr) { },
        success: function (data, textStatus, jqXHR) {

            if (typeof data !== "undefined") {
                let adata = JSON.parse(data.result);
                //                debugger;
                adata.map(datatmp => {
                    let tmpproduct = {
                        id: datatmp._id,
                        status_item: datatmp.status_item,
                        create_date: datatmp.create_date,
                        modification_date: datatmp.modification_date,
                        maker: datatmp.maker,
                        title: datatmp.title,
                        description: datatmp.description,
                        pathurl: datatmp.pathurl,
                    };
                    downloads.push(tmpproduct);
                });
            }
        },
        complete: function (jqXHR, textStatus) {
            DownloadReadCallBack(downloads);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.statusText);
        }
    });
}

// end downloads
// CLIENTS 
function ClientsReadCallBack(clients) {
    // console.dir(clients);
}

function ClientsRead() {
    listProduct = [];
    products = [];

    let endpoint = uriservice + "api/clients/4/filter";
    //  let tmpData = JSON.stringify(tmpuser);

    $.ajax({
        type: "GET",
        dataType: "json",
        url: endpoint,
        async: true,
        beforeSend: function (xhr) {
            // xhr.setRequestHeader("Authorization", token);
        },
        success: function (data, textStatus, jqXHR) {

            if (typeof data !== "undefined") {
                let adata = JSON.parse(data.result);
                //                debugger;
                adata.map(datatmp => {
                    let tmpclient = {
                        id: datatmp._id,
                        status_item: datatmp.status_item,
                        create_date: datatmp.create_date,
                        modification_date: datatmp.modification_date,
                        maker: datatmp.maker,
                        name: datatmp.name,
                        description: datatmp.description,
                        resenadurapiso: datatmp.resenadurapiso,
                        imgurl: datatmp.imgurl,
                    };
                    clients.push(tmpclient);
                });
            }
        },
        complete: function (jqXHR, textStatus) {
            ClientsReadCallBack(clients);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.statusText);
        }
    });
}

// region PRODUCTS
function ProductsReadCallBack(products) {
    
    let renderProducts = '';
    products.map(item => {
        renderProducts += `
        <div class="col-md-4 col-sm-6 col-xxs-12 animate-box fadeInUp animated">
        <a href="${item.imgurl}" class="fh5co-project-item image-popup">
            <img src="${item.imgurl}" alt="${item.description}" class="img-responsive img-responsive-custom">
            <div class="fh5co-text">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
            </div>
        </a>
       </div>   
     `
    });
    // $("#divIndexProducts").html(renderProducts);
    var myElement = document.getElementById("divIndexProducts");
    myElement.innerHTML = renderProducts;

}
function ProductsRead() {
    // debugger;
    listProduct = [];
    products = [];

    let endpoint = uriservice + "api/products/4/filter";
    //  let tmpData = JSON.stringify(tmpuser);

    $.ajax({
        type: "GET",
        dataType: "json",
        url: endpoint,
        async: true,
        beforeSend: function (xhr) {
            // xhr.setRequestHeader("Authorization", token);
        },
        success: function (data, textStatus, jqXHR) {

            if (typeof data !== "undefined") {
                let adata = JSON.parse(data.result);
                //                debugger;
                adata.map(datatmp => {
                    let tmpproduct = {
                        id: datatmp._id,
                        status_item: datatmp.status_item,
                        create_date: datatmp.create_date,
                        modification_date: datatmp.modification_date,
                        maker: datatmp.maker,
                        name: datatmp.name,
                        description: datatmp.description,
                        stock: datatmp.stock,
                        cost: datatmp.cost,
                        sale: datatmp.sale,
                        iva: datatmp.iva,
                        imgurl: datatmp.imgurl,
                    };
                    products.push(tmpproduct);
                });
            }
        },
        complete: function (jqXHR, textStatus) {
            ProductsReadCallBack(products);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.statusText);
        }
    });
}

function OnStart() {
    // ProductsRead();
    // ClientsRead();
    // DownloadsRead();
    // JobsRead();
}
// end LANDING PAGE
function ProductUpdate() {
    sessionStorage.getItem('productupdate');
    sessionStorage.setItem('productupdate', "");
    sessionStorage.setItem('productupdate', JSON.stringify(listProduct));
}
function ProductsDelete() {

    for (let index = 0; index < listProduct.length; index++) {
        let endpoint = uriservice + "api/products/" + listProduct[index].id;
        const data = { maker: sessionmaker };

        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: endpoint,
            async: true,
            data: data,
            beforeSend: function (xhr) {
                // xhr.setRequestHeader("Authorization", token);
            },
            success: function (data, textStatus, jqXHR) {

                if (typeof data !== "undefined") {
                    // console.dir(data);
                    // window.location.href("about.html");
                }
            },
            complete: function (jqXHR, textStatus) {
                let tmpindex = index + 1;
                if (tmpindex == listProduct.length) {
                    // debugger;
                    ProductsRead();
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.statusText);
            }
        });

    }


}
function ProductAction(product) {
    // listProduct.push(product);
    let tmpelementid = "cb" + product;
    var toogle = document.getElementById(tmpelementid).checked;

    if (toogle) {
        const resultado = products.find(item => item.id === product);
        listProduct.push(resultado);
    } else {
        for (var i = 0; i < listProduct.length; i++)
            if (listProduct[i].id === product) {
                listProduct.splice(i, 1);
                break;
            }
    }

    if (listProduct.length == 0) {
        document.getElementById("btnUpdate").style.visibility = "hidden";
        document.getElementById("btnDelete").style.visibility = "hidden";
    }

    if (listProduct.length == 1) {
        document.getElementById("btnUpdate").style.visibility = "visible";
        document.getElementById("btnDelete").style.visibility = "visible";

    }
    if (listProduct.length > 1) {
        document.getElementById("btnUpdate").style.visibility = "hidden";
        // document.getElementById("btnDelete").style.display = "block";

    }
}

function PreviewImage() {
    var tmpimg = document.getElementById('txtImg').value;
    if (tmpimg) {
        document.getElementById('imgPreview').src = tmpimg;
    }
}
function ProductOnLoad() {
    // debugger;
    let tmplistproduct = sessionStorage.getItem('productupdate');
    if (typeof tmplistproduct != '' || typeof tmplistproduct != 'undefined' || typeof tmplistproduct != undefined) {
        let tmpproduct = JSON.parse(tmplistproduct);
        ProductFillForm(tmpproduct[0]);
    }
}

function ProductFillForm(product) {
    try {

        // debugger;

        document.getElementById('productid').value = product.id;
        document.getElementById('productstatus').value = product.status_item;
        document.getElementById('productstock').value = product.stock;
        document.getElementById('productiva').value = product.iva;
        document.getElementById('txtImg').value = product.imgurl;
        document.getElementById('imgPreview').src = product.imgurl;
        document.getElementById('txtName').value = product.name;
        document.getElementById('txtDescription').value = product.description;
        document.getElementById('txtCost').value = product.cost;
        document.getElementById('txtSale').value = product.sale;
    } catch (error) {

    }
}

function getFormData($form) {
    let unindexed_array = $form.serializeArray();
    let indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

function ProductAdd() {

    let $form = $("#ProductCreateUpdate");
    let data = getFormData($form);
    data.maker = sessionmaker;
    let endpoint = "";
    let product = {};
    debugger;

    if (data.id.length > 0) {
        sessionStorage.setItem('productupdate', "");
        endpoint = uriservice + "api/products/" + data.id;
        $.ajax({
            type: "PATCH",
            dataType: "json",
            url: endpoint,
            async: true,
            data: data,
            beforeSend: function (xhr) {
                // xhr.setRequestHeader("Authorization", token);
            },
            success: function (data, textStatus, jqXHR) {

                if (typeof data !== "undefined") {
                    let datatmp = JSON.parse(data.result);
                    product = {
                        status_item: datatmp.name,
                        create_date: datatmp.parentResourceId,
                        modification_date: datatmp.modification_date,
                        maker: datatmp.maker,
                        name: datatmp.name,
                        description: datatmp.description,
                        cost: datatmp.cost,
                        sale: datatmp.sale,
                        iva: datatmp.iva,
                        stock: datatmp.stock,
                        imgurl: datatmp.imgurl,
                    };
                    // window.location.href("about.html");
                }
            },
            complete: function (jqXHR, textStatus) {

                document.getElementById("ProductCreateUpdate").reset();

                alert("Producto Agregado");
                location.href = "./backofficeproductcatalog.html";
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.statusText);
            }
        });
    } else {

        endpoint = uriservice + "api/products";
        $.ajax({
            type: "POST",
            dataType: "json",
            url: endpoint,
            async: true,
            data: data,
            beforeSend: function (xhr) {
                // xhr.setRequestHeader("Authorization", token);
            },
            success: function (data, textStatus, jqXHR) {

                if (typeof data !== "undefined") {
                    let datatmp = JSON.parse(data.result);
                    product = {
                        status_item: datatmp.name,
                        create_date: datatmp.parentResourceId,
                        modification_date: datatmp.modification_date,
                        maker: datatmp.maker,
                        name: datatmp.name,
                        description: datatmp.description,
                        cost: datatmp.cost,
                        sale: datatmp.sale,
                        iva: datatmp.iva,
                        stock: datatmp.stock,
                        imgurl: datatmp.imgurl,
                    };
                    // window.location.href("about.html");
                }
            },
            complete: function (jqXHR, textStatus) {
                document.getElementById("ProductCreateUpdate").reset();
                alert("Producto Agregado");
                location.href = "./backofficeproductcatalog.html";
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.statusText);
            }
        });
    }
    //  let tmpData = JSON.stringify(tmpuser);

}

$("#ProductCreateUpdate").on("submit", function (event) {
    event.preventDefault();
    // console.log($(this).serialize());
});





function UserLogin() {
    // alert("test");
    let $form = $("#UserLogin");
    let data = getFormData($form);

    let endpoint = uriservice + "api/login";
    //  let tmpData = JSON.stringify(tmpuser);
    $.ajax({
        type: "POST",
        dataType: "json",
        url: endpoint,
        async: true,
        data: data,
        beforeSend: function (xhr) {
        },
        success: function (data, textStatus, jqXHR) {

            if (typeof data !== "undefined") {
                let datatmp = JSON.parse(data.result);
                user = {
                    status_item: datatmp.name,
                    create_date: datatmp.parentResourceId,
                    modification_date: datatmp.modification_date,
                    maker: datatmp.maker,
                    name: datatmp.name,
                    description: datatmp.description,
                    imgurl: datatmp.imgurl,
                };
            }
        },
        complete: function (jqXHR, textStatus) {
            if (jqXHR.statusText == "Not Found") {
                document.getElementById("UserLogin").reset();
                alert("verificar usuario y contraseña");
            } else {
                location.href = "./about.html";
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.statusText);
        }
    });


}