import Swal from "sweetalert2";


export function deleteConfirmationAlert () { // deletePopUpAlert
    return Swal.fire({
        title: 'Are you sure?',
        text: "You are going to delete this item",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
}

export function isEmptyAlert () {
    return Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'All fields should be filled'
    })
}
export function invalidEmailAlert() {
    return Swal.fire({
        icon: 'error',
        title: 'Invalid email address',
        text: 'Email you provided is not valid please try again'
    })
}

// export function thankYouMessageAlert() {} this message should be custom