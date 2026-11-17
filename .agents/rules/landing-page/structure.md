# Structure & Placement

```
app/
├── routes.ts                      # konfigurasi route terpusat
├── layouts/<nama>-layout.tsx      # layout (header/footer)
├── routes/<segment>/page.tsx      # halaman: meta(), clientAction()/clientLoader(), default Page()
├── routes/<segment>/sections/     # section khusus halaman itu
├── components/ui/                 # komponen shadcn (jangan bikin wrapper baru kalau sudah ada)
├── components/                    # komponen dipakai bersama (reveal, image-slot, header…)
├── constants/<domain>.ts          # konstanta & data domain (clinic.ts)
├── schemas/<domain>.ts            # schema zod
└── services/<domain>.ts           # akses API eksternal
```

- Route baru: daftarkan di `app/routes.ts` di dalam `layout('./layouts/…')`.
- Import pakai alias `~/`.
- Data klinik (nama, alamat, treatment, harga) hanya di `constants/clinic.ts`, bukan hardcode di komponen.
- File besar dipecah per section.
- JSX ditulis langsung di dalam `.map`, varian pakai map `Record` bukan ternary bertingkat.
- Nilai turunan (find/filter/hasil helper) di komponen dibungkus `useMemo`.
