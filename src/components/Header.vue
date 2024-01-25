<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-white bg-white">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <form class="d-flex">
                        <input class="form-control shadow-sm" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-danger shadow-sm" type="submit"><font-awesome-icon
                                :icon="['fas', 'search']" /></button>
                    </form>
                    <div class="d-flex">
                        <button class="btn btn-white" type="button">
                            <font-awesome-icon :icon="['fas', 'heart']" />
                        </button>
                    </div>
                    <div class="d-flex">
                        <button class="btn btn-white" type="button">
                            <font-awesome-icon :icon="['fas', 'shopping-cart']" />
                        </button>
                    </div>
                    <div class="dropdown d-flex">
                        <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="true">
                            <font-awesome-icon :icon="['fas', 'user']" />
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" @click="logoutHandler">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <!-- <div class="title-belanja container">
    <div class="d-flex align-items-center text-belanja">
      <div>
        <p>Belanja</p>
      </div>
      <div>
        <button class="btn">
          <font-awesome-icon :icon="['fas', 'sort-up']" style="color: #ffffff;" />
        </button>
      </div>
    </div>
  </div> -->
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    methods: {
        logoutHandler() {
            Swal.fire({
                title: 'Logout',
                text: 'Apakah Anda yakin ingin logout?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, Logout!',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$store.dispatch('logout');
                }
            });
        }
    }
}
</script>

<style>
.btn-custom-color {
    background-color: #EB3F36;
    color: #fff;
}

.btn-custom-color:hover {
    background-color: #730C07;
    color: #fff;
}

.title-belanja {
    width: 100%;
    background-color: #f0f0f0;
    height: 35px;
}

.text-belanja {
    width: 100%;
}
</style>