import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const data = [
  {
    nama: "ardyas setya",
    rules: "karyawan",
    email: "ardyas@gmail.com",
    telp: "098765123123",
    status: "aktif",
  },
  {
    nama: "ardyas setya",
    rules: "karyawan",
    email: "ardyas@gmail.com",
    telp: "098765123123",
    status: "aktif",
  },
  {
    nama: "ardyas setya",
    rules: "karyawan",
    email: "ardyas@gmail.com",
    telp: "098765123123",
    status: "aktif",
  },
  {
    nama: "ardyas setya",
    rules: "karyawan",
    email: "ardyas@gmail.com",
    telp: "098765123123",
    status: "aktif",
  },
  {
    nama: "ardyas setya",
    rules: "karyawan",
    email: "ardyas@gmail.com",
    telp: "098765123123",
    status: "aktif",
  },
  {
    nama: "ardyas setya",
    rules: "karyawan",
    email: "ardyas@gmail.com",
    telp: "098765123123",
    status: "aktif",
  },
  {
    nama: "ardyas setya",
    rules: "karyawan",
    email: "ardyas@gmail.com",
    telp: "098765123123",
    status: "aktif",
  },
  {
    nama: "ardyas setya",
    rules: "karyawan",
    email: "ardyas@gmail.com",
    telp: "098765123123",
    status: "aktif",
  },
  {
    nama: "ardyas setya",
    rules: "karyawan",
    email: "ardyas@gmail.com",
    telp: "098765123123",
    status: "aktif",
  },
  {
    nama: "ardyas setya",
    rules: "karyawan",
    email: "ardyas@gmail.com",
    telp: "098765123123",
    status: "aktif",
  },
];

const Employee = () => {
  return (
    <div className="p-5 w-full space-y-3">
      <h1 className="text-black font-bold text-xl">USER DATA </h1>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Cari Akun"
          className="input bg-white input-bordered w-full "
        />
        <button class="btn gap-2 bg-cyan-500 text-white btn-outline">
          Tambah Akun
          <AiOutlinePlus />
        </button>

        <div className="overflow-x-auto w-full bg-white">
          <table className="table w-full bg-white">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Rules</th>
                <th>Email</th>
                <th>Telp</th>
                <th>Status</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="">
              {data.map((item) => (
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.nama}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.rules}</td>
                  <td>{item.email}</td>
                  <td>{item.telp}</td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {item.status}
                    </span>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Hapus</button>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
